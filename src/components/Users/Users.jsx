import React from "react";
import astronaut from "../../assets/images/astronaut.png"
import styles from "./Users.module.css"
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // If make this --- Maximum call stack size exceeded
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={styles.pagesCount}>
            {pages.map((p, pid) => {
                return <span key={pid}
                             className={props.currentPage === p ? styles.selectedPage : undefined}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map((u, uid) => <div key={uid} className={styles.usersStyle}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img key={uid} src={u.photos.small != null
                                ? u.photos.small : astronaut}
                                 alt="Astronaut"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.unfollow(u.id)
                                              }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow</button>}
                    </div>
                </div>
                <span>
            <span>
            <div>{u.name}</div>
                <div>{u.status}</div>
                    </span>
                <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
            </span>
            </div>)
        }
    </div>
}

export default Users