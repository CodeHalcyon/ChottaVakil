import React from 'react'
export default function Card(props) {
    return (
        <>        
            <div className="card-container">
                <div className="img">
                    <img src={props.img} alt="" />
                </div>
                <div className="desc">
                    {props.desc}
                </div>
            </div>
        </>
    );
}

