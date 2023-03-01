import React, {useEffect, useState} from 'react';
import axios from "axios";

export const Comp = () => {


    const [state, setState] = useState<any>(null)

    useEffect(() => {
        axios.post('https://test.vmarmysh.com/api.user.tree.get?treeName=122')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    const getChildren = () => {
        if (state.children.length) {

        }
    }

    return (
        <div>
        </div>
    );
};

