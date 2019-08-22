import React from 'react';

const UserComponent = (props) => {
    return (
        <div>
            {/* 로그인 유저명 출력
            로그아웃 액션 */}
            
            Hello<h3>{props.user_id}</h3>
            <button>로그아웃</button>
        </div>
    );
};

export default UserComponent;