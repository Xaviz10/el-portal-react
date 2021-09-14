import React, { useState, useEffect }from 'react';

const Test = ({ users }) => {
    console.log(users)
    
    return (
        <div>
            <ul>
                {users.sort((a, b) => {
                    let lastNameA = a.lastName;
                    let lastNameB = b.lastName;
                    console.log("A",lastNameA,a)
                    console.log("B",lastNameB, b)
                    if (lastNameA > lastNameB) {
                        return 1;
                    }

                    if (lastNameA < lastNameB) {
                        return -1;
                    }
                    return 0;
                }).map((user, index) => {
                    console.log(user);
                    return (<li key={index}> {user.firstName} {user.lastName}</li>);
                })}
            </ul>
        </div>
    );
}

export default Test;