import React from 'react';
import { UserAvatar } from './user-avatar';
import * as styles from "./user.module.css"

export const User = props => (
    <div className={styles.user}>
        <UserAvatar url={props.avatar} className={styles.avatar} />
        <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        { props.excerpt && <p className={styles.excerpt}>{props.excerpt}</p> }
        </div>
    </div>
)