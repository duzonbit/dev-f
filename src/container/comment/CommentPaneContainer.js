/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { AjaxComment } from "url/comment";

import { Card, Container, Row, Col, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { UrlBbs } from "url/comment";

import swal from 'sweetalert';

const CommentPaneContainer = (props) => {
    const [comments, setComments] = useState([]);
    const [commentNum, setCommentNum] = useState(0);
    const [commentPageSize, setCommentPageSize] = useState("10");
    const [commentTotal, setCommentTotal] = useState("");

    useEffect(() => {
        AjaxComment.read(props.readNum, commentNum).then((data) => {
            setComments(data.data.page.list);
            setCommentNum(data.data.page.currpage);
            setCommentPageSize(data.data.page.size);
            setCommentTotal(data.data.page.maxpage);
        }).catch((e) => {
            console.log(e)
        })
    }, [props, commentNum]);


    const onCreate = (event) => {
        event.preventDefault();
        let data = {};
        const formData = new FormData(event.target);
        for (let key of formData.keys()) {
            data[key] = formData.get(key);
        }

        AjaxComment.create(data).then((data) => {
            swal("Create Complete!", "", "success");
            props.history.push(`/bbs/read/${props.readNum}`);
        }).catch((e) => {
            console.log(e);
        });
        event.target.content.value = '';
    };

    const onDelete = (idx) => {
        idx = Number(idx);
        let data;
        for (const key in comments) {
            if (comments[key].idx === idx) {
                data = comments[key];
            }
        }

        AjaxComment.delete(data).then((data) => {
            swal("Delete Complete!", "", "success");
            props.history.push(`/bbs/read/${props.readNum}`);
        }).catch((e) => {
            console.log(e);
        });
    };

    const renderList = () =>
        comments.map((v, i) => (
            <tr key={i}>
                <th>{v["name"]}</th>
                <th>{v["content"]}</th>
                <th>
                    <Button className="btn-1 ml-1" color="warning" outline type="button" onClick={(e) => { onDelete(v["idx"]) }}>삭제</Button>
                </th>
            </tr>
        ));

    const renderPaging = (commentNum, commentPageSize, commentTotal) => {
        const paging = () => {
            let initIndex = Math.floor(commentNum / commentPageSize) * 10;
            let page_max = initIndex + commentPageSize > commentTotal ? commentTotal : initIndex + commentPageSize;
            let paging = [];
            for (let index = initIndex + 1; index <= page_max + 1; index++) {
                paging.push(<Link key={index} to={UrlBbs.list + props.readNum + '/' + index}>
                    <Button className="btn-1 ml-1" color="info" outline type="button" onClick={(e) => { setCommentNum(index - 1) }}>{index}</Button>
                </Link>
                );
            }
            let first = (<Link key={"first"} to={UrlBbs.list + props.readNum + '/' + 1}>
                <Button className="btn-1 ml-1" color="info" outline type="button" onClick={(e) => { setCommentNum(0) }}>{"<<"}</Button>
            </Link>)
            let last = (<Link key={"last"} to={UrlBbs.list + props.readNum + '/' + commentTotal}>
                <Button className="btn-1 ml-1" color="info" outline type="button" onClick={(e) => { setCommentNum(commentTotal) }}>{">>"}</Button>
            </Link>)

            let prev = (<Link key={"prev"} to={UrlBbs.list + props.readNum + '/' + initIndex}>
                <Button className="btn-1 ml-1" color="info" outline type="button" onClick={(e) => { setCommentNum(initIndex) }}>{"<"}</Button>
            </Link>)

            let next = (<Link key={"next"} to={UrlBbs.list + props.readNum + '/' + (page_max + 1)}>
                <Button className="btn-1 ml-1" color="info" outline type="button" onClick={(e) => { setCommentNum(page_max + 1) }}>{">"}</Button>
            </Link>)

            if (initIndex !== 0) {
                paging.unshift(prev);
            }
            paging.unshift(first);

            if (initIndex + commentPageSize < commentTotal) {
                paging.push(next);
            }
            paging.push(last);
            return paging;
        };
        return paging();
    };

    return (
        <>
            <main className="profile-page">
                <section className="section-profile-cover section-shaped my-0" style={{ height: '300px' }}>
                </section>
                <section className="section">
                    <Container>
                        <Card className="card-profile shadow mt--300">
                            <div className="px-4">
                                <Row className="justify-content-left">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col className="order-lg-1" lg="4">
                                        <div className="card-profile-stats d-flex justify-content-left">
                                            <div>
                                                <span className="heading">COMMENT</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <form onSubmit={onCreate}>
                                    <Row>
                                        <Col>
                                            <Input name="name" value={"김홍일"} readOnly />
                                        </Col>
                                        <Col>
                                            <Input name="user_idx" value={48} readOnly />
                                        </Col>
                                        <Col>
                                            <Input name="content" placeholder="COMMENT" />
                                        </Col>
                                        <Input name="bbs_idx" value={props.readNum} readOnly hidden />
                                        <Button className="btn-1 ml-1" outline color="info" type="sumbit">확인</Button>
                                    </Row>
                                </form>
                                <div className="text-center mt-5">
                                    <table style={{ width: '700px' }} align="center">
                                        <thead>
                                            <tr>
                                                <th>이름</th>
                                                <th>내용</th>
                                                <th>삭제</th>
                                            </tr>
                                        </thead>
                                        <tbody>{renderList()}</tbody>
                                    </table>
                                    <br />
                                    {renderPaging(commentNum, commentPageSize, commentTotal)}
                                </div>
                                <div className="mt-5 py-5 text-center">
                                </div>
                            </div>
                        </Card>
                    </Container>
                </section>
            </main>
        </>
    );
};

export default CommentPaneContainer;