//import React, { useState } from 'react';
import React from 'react';
import { Typography } from '@material-ui/core';



export default function Homeblurb(props) {

    return (
        <Typography>
            <h2>Landing page for Paul Glavich</h2>

            <p>If you have come here hoping for real content that is going to add value to your life, you may
                be somewhat disappointed. If you are reading this, and have no idea who Paul Glavich is, then I'd
                say you probably either got here by mistake, or you legitimately want to know more.</p>

            <h4>If you got here by mistake</h4>
            <p>Be off with you then. Close this tab, do not look back. Alternatively, look at the either mesmerising
                or annoying animations on the right side of this page.</p>

            <h4>You want to know more?</h4>
            <p>Rightio then, listed below are links to some contact myself, or find out a bit more:</p>
            <ul>
                <li><a href="https://weblogs.asp.net/pglavich" alt="Blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
            </ul>

            <p>What you will find is some basic information and links to where the real stuff is.</p>

            <p>And some more content to display as text, And some more content to display as text
                    , And some more content to display as text, And some more content to display as text,
                    And some more content to display as text</p>

            <p>Here is come content</p>

            <p>And some more content to display as text, And some more content to display as text
                    , And some more content to display as text, And some more content to display as text,
                    And some more content to display as text</p>
        </Typography>
    );
}