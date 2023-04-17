import React from 'react';
import {selectProduct, useCreateShopStore} from "../bll/store";

export const MainPage = () => {

    const products = useCreateShopStore(selectProduct)
    return (
        <div>
            <h2>Товары:</h2>
            <ul>
                {products.map(el =>
                    <li key={el.id}>{el.title}
                        <span> Цена: {el.price} руб.</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

