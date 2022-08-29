import React, { useState } from 'react'

function Stepper(props) {
    const [itemKey, setItemkey] = useState([])
    const handleEmail = () => {
        let val = props.data.subHead.split(" ");
        val[5] = props.email;
        return val.join(" ");
    }
    return (
        <>
            <div className='container text-center pt-5'>
                <h1 className='mt-5 ' data-testid="heading-test">
                    {
                        props.data.heading ?
                            props.data.heading :
                            ""
                    }
                </h1>
                <p className='mt-2' data-testid="subHead-test">
                    {
                        props.data.subHead ?
                            props.email ?
                                handleEmail() :
                                props.data.subHead
                            :
                            ""
                    }
                </p>
                {
                    props.data.placeholder ?
                        <input
                            type={props.data.type}
                            placeholder={props.data.placeholder}
                            className='form-control w-50 m-auto p-2 mt-5'
                            value={props.value1}
                            onChange={(e) => props.set1(e.target.value)}
                        /> :
                        null
                }
                {
                    props.data.placeholder2 ?
                        <input
                            type={props.data.type2}
                            placeholder={props.data.placeholder2}
                            className='form-control w-50 m-auto p-2 mt-5'
                            value={props.value2}
                            onChange={(e) => props.set2(e.target.value)}
                        /> :
                        null
                }
                {
                    props.data.placeholder3 ?
                        <div>
                            <input
                                type={props.data.type3}
                                placeholder={props.data.placeholder3}
                                className='form-control w-50 m-auto p-2 mt-5 mb-3'
                                value={props.value3}
                                onChange={(e) => props.set3(e.target.value)}
                            />
                            <small className='text-secondary'>
                                Password includes at least one from "a-z", "A-Z", "0-9" and symbol "!@#$%^&*". Min character should be 8.
                            </small>
                        </div> :
                        null
                }
                {
                    props.data.textBox ?
                        <div>
                            <textarea
                                className='form-control w-50 m-auto p-2 mt-5 mb-3'
                                placeholder={props.data.textBox}
                                value={props.value4}
                                onChange={(e) => { props.set4(e.target.value) }}
                            />
                        </div> :
                        null
                }
                {
                    props.data.radio1 ?
                        <label
                            className='d-flex mb-2 mt-5 col-md-2 border py-2 m-auto'
                            htmlFor={props.data.radio1}
                            onClick={() => {
                                props.setGender(props.data.radio1)
                            }}
                        >
                            <input
                                type="radio"
                                id={props.data.radio1}
                                name="gender"
                                checked={props.gender === props.data.radio1 ? props.gender : ""}
                                className="mx-3 col-md-3"
                            />
                            {props.data.radio1}
                        </label> :
                        null
                }
                {
                    props.data.radio2 ?
                        <label
                            className='d-flex mb-2 col-md-2 border py-2 m-auto'
                            htmlFor={props.data.radio2}
                            onClick={() => {
                                props.setGender(props.data.radio2)
                            }}
                        >
                            <input
                                type="radio"
                                id={props.data.radio2}
                                name="gender"
                                checked={props.gender === props.data.radio2 ? props.gender : ""}
                                className="mx-3 col-md-3"
                            />
                            {props.data.radio2}
                        </label> :
                        null
                }
                {
                    props.data.radio3 ?
                        <label
                            className='d-flex mb-2 col-md-2 border py-2 m-auto'
                            htmlFor={props.data.radio3}
                            onClick={() => {
                                props.setGender(props.data.radio3)
                            }}
                        >
                            <input
                                type="radio"
                                id={props.data.radio3}
                                name="gender"
                                checked={props.gender === props.data.radio3 ? props.gender : ""}
                                className="mx-3 col-md-3"
                            />
                            {props.data.radio3}
                        </label> :
                        null
                }
                {
                    props.data.label ?
                        <div className='col-md-4 m-auto'>
                            {
                                props.data.label.map((item, key) => {

                                    return (
                                        <>
                                            <label
                                                className={itemKey.includes(key) ? "d-none" : 'mb-4 border py-2 text-start px-3 d-block'}
                                                onClick={() => {
                                                        setItemkey((prev) =>
                                                            [...prev, key]
                                                        );
                                                        console.log("item key", itemKey);
                                                }}
                                                key={key}
                                            >
                                                {item}
                                            </label>
                                            {
                                                itemKey != null ?
                                                    <div>
                                                        <input
                                                            className={!itemKey.includes(key) ? "d-none" : item.includes("Website") ? 'mb-4 border py-2 text-start px-3 w-100' : 'mb-4 border py-2 text-start px-3'}
                                                            placeholder={item.includes("Website") ? item : item.includes("YouTube") ? item + " URL" : item + " Username"}

                                                        />
                                                        <select
                                                            className={!itemKey.includes(key) || item.includes("Website") ? "d-none" : 'mb-4 border py-2 text-start px-3 w-50'}

                                                        >
                                                            <option selected>
                                                                {item.includes("YouTube") ? item + " Subscribers" : item + " Followers"}
                                                            </option>
                                                            <option value={"0K-1K"}>0K-1K</option>
                                                            <option value={"1K-10K"}>1K-10K</option>
                                                            <option value={"10K-50K"}>10K-50K</option>
                                                            <option value={"50K-100K"}>50K-100K</option>
                                                            <option value={"100K-500K"}>100K-500K</option>
                                                            <option value={"500K-1M"}>500K-1M</option>
                                                            <option value={"1M-10M"}>1M-10M</option>
                                                            <option value={"10M+"}>10M+</option>
                                                        </select>
                                                    </div>
                                                    :
                                                    null
                                            }
                                        </>
                                    )
                                })
                            }
                        </div> :
                        null
                }
                {
                    props.next ?
                        <button
                            className='btn btn-primary col-md-2 p-2 mt-4 mb-5'
                            onClick={props.next}
                            disabled={props.disabled}
                            data-testid="next-test"
                        >
                            Next
                        </button> :
                        null
                }
            </div>
        </>
    )
}

export default Stepper