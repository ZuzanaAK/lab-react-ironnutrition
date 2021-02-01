import React from 'react';

class FoodBox extends React.Component {

    /*
    this.props.singleFood = {
            "name": "Pizza",
            "calories": 400,
            "image": "https://i.imgur.com/eTmWoAN.png",
            "quantity": 0 
    }
    */ 

    render () {

        const {name,calories, image} = this.props.singleFood

        return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input className="input" type="number" value="1" />
                    </div>
                    <div className="control">
                    <button className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
            </div>
        )
    

    }
}

export default FoodBox