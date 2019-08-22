import React from "react";

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
    <form>
    <article>
      <table>
        <tbody>
          <tr>
            <td>idx</td>
            <td>
              <input name={"idx"} value={idx} readOnly={true} disabled={true} />
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>
              <input
                name={"name"}
                value={name}
                readOnly={true}
                disabled={true}
              />
            </td>
          </tr>
          <tr>
            <td>pw</td>
            <td>
              <input type="password" autoComplete={"true"} name={"pw"} onChange={onChangePw} value={pw} />
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <input name={"title"} onChange={onChangeTitle} value={title} />
            </td>
          </tr>
          <tr>
            <td>content</td>
            <td>
              <textarea name={"content"} onChange={onChangeContent} value={content} />
            </td>
          </tr>
          <tr>
            <td>regdate</td>
            <td>
              <input
                name={"regdate"}
                value={regdate}
                readOnly={true}
                disabled={true}
              />
            </td>
          </tr>
          <tr>
            <td>modifydate</td>
            <td>
              <input
                name={"modifydate"}
                value={modifydate}
                readOnly={true}
                disabled={true}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </article>
    </form>
  );
};

export default GeneralUpdateData;
