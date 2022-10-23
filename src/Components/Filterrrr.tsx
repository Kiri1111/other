import React, {useState} from "react";

type FilterType = 'all' | 'RUBLS' | 'Dollars'
export type FType = {
    name: string
}

export function Filterrrr(props: FType) {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'Dollars') {
        currentMoney.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')


        const onClickHandler = (nameButton: FilterType) => {
            setFilter(nameButton)

        }
        return (
            <>
                <div>
                    {props.name}
                </div>
                <ul>
                    {currentMoney.map((objFromMoneyArr, index) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknots}</span>
                                <span>{objFromMoneyArr.value}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => onClickHandler('all')}>all</button>
                <button onClick={() => onClickHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => onClickHandler('Dollars')}>Dollar</button>
            </>
        )


    }
}
