import React from 'react';
import IF, {Else} from "./if";

export default function UserInfo (props)  {
    const user = props.user || {};
    return (
        <div>
            <IF test={user&&user.name}>
                Seja bem-vindo <strong>{user.name}</strong>!
            </IF>

            <IF test={!user || !user.name}>
                Seja bem-vindo <strong>Amigão!</strong>!
            </IF>

            <IF test={!user || !user.name}>
                Seja bem-vindo <strong>Amigão!</strong>!
                <Else>
                 Seja bem-vindo <strong>Amigão!</strong>!
                </Else>
            </IF>
        </div>
    );
};