import React from "react";
import { Card, Container, Row, Col, Input } from "reactstrap";

const GeneralUpdateData = ({
  idx,
  name,
  pw,
  title,
  content,
  regdate,
  modifydate,
  onChangePw,
  onChangeTitle,
  onChangeContent,
}) => {
  return (
    <>
    <main className="profile-page">
              <section className="section-profile-cover section-shaped my-0" style={{height:'350px'}}>
                {/* Circles background */}
                <div className="shape shape-style-1 shape-default alpha-4">
                </div>
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
                              <span className="heading">UDPATE</span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Col className="order-lg-1" lg="4">
                      <div>
                      <form align="center">
                            <table style={{width:'600px'}}>
                            <tbody>
                                   <tr>
           <td>idx</td>
            <td>
            <Input style={{width:'300px', height:'35px'}} className="form-control-alternative is-valid" type="text" 
            name={"idx"} value={idx} readOnly={true} disabled={true}></Input>
       </td>
    </tr>
    <tr>
            <td></td>
          </tr>
     <tr>
         <td>name</td>
       <td>
       <Input style={{width:'300px', height:'35px'}} className="form-control-alternative is-valid" type="text" 
            name={"name"} value={name} readOnly={true} disabled={true}></Input>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>pw</td>
            <td>
            <Input style={{width:'300px', height:'35px'}} className="form-control-alternative is-valid" type="password" 
            autoComplete={"true"} name={"pw"} onChange={onChangePw} value={pw}></Input>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>title</td>
            <td>
            <Input style={{width:'300px', height:'35px'}} className="form-control-alternative is-valid" type="text" 
            name={"title"} onChange={onChangeTitle} value={title}></Input>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>content</td>
            <td>
            <Input style={{width:'300px', height:'100px'}} className="form-control-alternative is-valid" type="textarea" 
            name={"content"} onChange={onChangeContent} value={content}></Input>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>regdate</td>
            <td>
            <Input style={{width:'300px', height:'35px'}} className="form-control-alternative is-valid" type="text" 
            name={"regdate"} readOnly={true} disabled={true} value={regdate}></Input>
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr></tr>
          <tr>
            <td>modifydate</td>
            <td>
            <Input style={{width:'300px', height:'35px'}} className="form-control-alternative is-valid" type="text" 
             name={"modifydate"} readOnly={true} disabled={true} value={modifydate}></Input>
            </td>
          </tr>
                            </tbody>
                            </table>
                            <br/>
                        </form>
                      </div>
                      </Col>
                      <div className="py-3 text-center">   
                      </div>
                    </div>
                  </Card>
                </Container>
              </section>
            </main>
    </>
    // <form>
    // <article>
    //   <table>
    //     <tbody>
    //       <tr>
    //         <td>idx</td>
    //         <td>
    //           <input name={"idx"} value={idx} readOnly={true} disabled={true} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>name</td>
    //         <td>
    //           <input
    //             name={"name"}
    //             value={name}
    //             readOnly={true}
    //             disabled={true}
    //           />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>pw</td>
    //         <td>
    //           <input type="password" autoComplete={"true"} name={"pw"} onChange={onChangePw} value={pw} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>title</td>
    //         <td>
    //           <input name={"title"} onChange={onChangeTitle} value={title} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>content</td>
    //         <td>
    //           <textarea name={"content"} onChange={onChangeContent} value={content} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>regdate</td>
    //         <td>
    //           <input
    //             name={"regdate"}
    //             value={regdate}
    //             readOnly={true}
    //             disabled={true}
    //           />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td>modifydate</td>
    //         <td>
    //           <input
    //             name={"modifydate"}
    //             value={modifydate}
    //             readOnly={true}
    //             disabled={true}
    //           />
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </article>
    // </form>
  );
};

export default GeneralUpdateData;
