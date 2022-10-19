import React, {useState} from "react";

type  CarsType = {
    title: string
    topCars: Array<ArrType>

}
type ArrType = {
    manufacturer: string
    model: string
}

export function Cars(props: CarsType) {


    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.topCars.map((t) => {
                    return (
                        <li key={t.model}>
                            {t.model}{t.manufacturer}
                        </li>
                    )
                })


                }

            </ul>


        </div>
    )
}












