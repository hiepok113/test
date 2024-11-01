import React from "react";

class Displayinfo extends React.Component {
    render() {
        const { listUser } = this.props;
        console.log(listUser)

        return (
            <div>
                {listUser.map((user) => {

                    return (
                        <div key={user.id}>
                            <div> My name is {user.name} </div>
                            <div> My old  is {user.age} </div>
                            <hr />

                        </div>
                    )



                })}
                {/* <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr />
                <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr />
                <div>My name is {name}</div>
                <div>My age is {age}</div> */}


            </div>
        )
    }
}
export default Displayinfo