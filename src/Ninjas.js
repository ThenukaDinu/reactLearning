import React from 'react';

const Ninjas = ({ninjas}) => {  /* Destructuring directly array return from App.js (root) Component*/  

    /*const { ninjas } = props; // Destructuring array return from App.js (root) Component */

    // const ninjaList = ninjas.map(ninja => { /*Map all ninjas using unique key or id*/
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ ninja.id }>
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age }</div>
    //                 <div>Belt: { ninja.belt }</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })

    const ninjaList = ninjas.map(ninja => {
       return ninja.age > 20 ? (
        <div className="ninja" key={ ninja.id }>
            <div>Name: { ninja.name }</div>
            <div>Age: { ninja.age }</div>
            <div>Belt: { ninja.belt }</div>
        </div>
        ) : null
    })

    
    return (
        <div className="ninja-list">
        { ninjaList /*Show all ninjas data return from root */ }
        </div>
    )
}

export default Ninjas