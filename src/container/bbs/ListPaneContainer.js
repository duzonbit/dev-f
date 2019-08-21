import React from "react";
import { Link } from "react-router-dom";
import { UrlBbs } from "url/bbs";
import { connect } from "react-redux";
import { getList } from "store/module/bbs/list";
import GeneralPageNation from "component/bbs/pagination/GeneralPageNation";

class ListPaneContainer extends React.Component {

  async componentDidMount() {
    const { getList } = this.props; //stateToProps
    const { pageNum } = this.props; //parentToProps

    await getList(pageNum);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.pageNum !== this.props.pageNum) {
      const { getList } = this.props; //stateToProps
      const { pageNum } = this.props; //parentToProps

      await getList(pageNum); //action dispatch
    }
  }

  drawList = () =>
    this.props.content.map((e, i) => {
      return (
        <tr key={i}>
          <td>{e.idx}</td>
          <td>{e.name}</td>
          <td>{e.title}</td>
          <td>
            <Link to={UrlBbs.read + e.idx}>
              <span>{e.content}</span>
            </Link>
          </td>
          <td>{e.regdate}</td>
          <td>{e.modifydate}</td>
        </tr>
      );
    });

  paging = ({ pageNumber, pageSize, totalPages } = this.props) => {
    let initIndex = Math.floor(pageNumber / pageSize) * 10;
    let page_max =
      initIndex + pageSize > totalPages ? totalPages : initIndex + pageSize;
    let paging = [];

    for (let index = initIndex + 1; index <= page_max; index++) {
      paging.push(
        <Link key={index} to={UrlBbs.list + index}>
          <button>{index}</button>
        </Link>
      );
    }
    let first = (
      <Link key={"first"} to={UrlBbs.list+1}>
        <button>{"<<"}</button>
      </Link>
    );
    let last = (
      <Link key={"last"} to={UrlBbs.list + totalPages}>
        <button>{">>"}</button>
      </Link>
    );
    let prev = (
      <Link key={"prev"} to={UrlBbs.list + initIndex}>
        <button>{"<"}</button>
      </Link>
    );
    let next = (
      <Link key={"next"} to={UrlBbs.list + (page_max + 1)}>
        <button>{">"}</button>
      </Link>
    );

    if (initIndex !== 0) {
      paging.unshift(prev);
    }
    paging.unshift(first);

    if (initIndex + pageSize < totalPages) {
      paging.push(next);
    }
    paging.push(last);
    return paging;
  };

  render() {
    return (
      <div>
        <article>
          <table>
            <thead>
              <tr>
                <th>글번호</th>
                <th>이름</th>
                <th>제목</th>
                <th>내용</th>
                <th>등록일</th>
                <th>글변경일</th>
              </tr>
            </thead>
            <tbody>{this.drawList()}</tbody>
          </table>
        </article>
        <div>
          <div><GeneralPageNation/></div>
          <div>{this.paging()}</div>
          <div>
            <Link to={UrlBbs.create}>
              <button>글쓰기</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('맵스테이트',state.list.toJS().loading);
  // console.log("맵스테이트222", state.list.get("status"));
  // console.log("맵스테이트222", state.list.getIn(["data", "content"]));
  console.log('리스트컨테이너,', state);
  
  return {
    loading: state.list.get("loading"),
    error: state.list.get("error"),
    status: state.list.get("status"),
    content: state.list.getIn(["data", "content"]), // return [Map({}),Map({}),Map({}),Map({})]
    pageSize: state.list.getIn(["data", "pageable", "pageSize"]),
    pageNumber: state.list.getIn(["data", "pageable", "pageNumber"]),
    totalPages: state.list.getIn(["data", "totalPages"])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (page) => {dispatch(getList(page))},
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPaneContainer);

/********************
 * import React from 'react';
import { Link } from "react-router-dom";
import {AjaxBbs, UrlBbs} from "url/bbs";

class ListPaneContainer extends React.Component {
  state = {
    res: {}
  };
  page = {};
  async componentDidMount() {
    const res = await AjaxBbs.list(this.props.pageNum);
    this.page = res.data;
    this.setState({
      res: res
    });
  };
       
  async componentDidUpdate(prevProps,prevState){
    if(prevProps.pageNum !== this.props.pageNum){
      const res = await AjaxBbs.list(this.props.pageNum);
      this.page = res.data;
      this.setState({
        res: res
      });
    }
  }

  list = ({ res } = this.state, { content } = this.page) => {
    if (res.status === 200) {
      return content.map((e, i) => {
        return (
          <tr key={i}>
            <td>{e.idx}</td>
            <td>{e.name}</td>
            <td>{e.title}</td>
            <td>
                <Link to={UrlBbs.read + e.idx}><span>{e.content}</span></Link>
            </td>
            <td>{e.regdate}</td>
            <td>{e.modifydate}</td>
            <td>
              <Link to={UrlBbs.update + e.idx}>
                <button>업데이트</button>
              </Link>
            </td>
          </tr>
        );
      });
    }
  };

  paging = ({res} = this.state, { page } = this) => {
    
    if (res.status === 200) {
      let pageable = page.pageable;
      let initIndex = Math.floor(pageable.pageNumber/page.size)*10;
      
      let page_max =
        initIndex + pageable.pageSize > page.totalPages
          ? page.totalPages
          : initIndex + pageable.pageSize;
      let paging = [];
      
      for (let index = initIndex + 1; index <= page_max; index++) {
        paging.push(
          <Link key={index} to={UrlBbs.list + index}>
            <button>{index}</button>
          </Link>
        );
      }
      let first = <Link key={"first"} to={UrlBbs.list}><button>{"<<"}</button></Link>;
      let last  = <Link key={"last"} to={UrlBbs.list+page.totalPages}><button>{">>"}</button></Link>;
      let prev  = <Link key={"prev"} to={UrlBbs.list+initIndex}><button>{"<"}</button></Link>
      let next  = <Link key={"next"} to={UrlBbs.list+(page_max+1)}><button>{">"}</button></Link>

      if(initIndex!==0){
        paging.unshift(prev);
      }
      paging.unshift(first);


      if(initIndex+page.size<page.totalPages){
        
        paging.push(next);
      }
      paging.push(last);
      return paging;
    }
  };

  render() {
    return (
      <div>
        <article>
          <table>
            <thead>
              <tr>
                <th>글번호</th>
                <th>이름</th>
                <th>제목</th>
                <th>내용</th>
                <th>등록일</th>
                <th>글변경일</th>
                <th>업데이트</th>
              </tr>
            </thead>
            <tbody>{this.list()}</tbody>
          </table>
        </article>
        <div>
          <div>
            {this.paging()}
          </div>
          <div>
            <Link to={UrlBbs.create}><button>글쓰기</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListPaneContainer;
 */
