import React from "react";
import './Displayinfor.scss'


class Displayinfo extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUser } = this.props;


        return (
            <div className="display-infor-container">
                
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? " Hide list users :" : " Show list users :"}
                    </span>

                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                                <div> My name is {user.name} </div>
                                <div> My old  is {user.age} </div>
                                <div>
                                    <button>Del</button>
                                </div>
                                <hr />

                                </div>
                               
                            )

                        })}
                    </>
                }
            </div>
        )
    }
}
export default Displayinfo