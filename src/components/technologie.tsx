import docker from '../assets/docker.png';
import css from '../assets/icons8-css-480.png';
import html from '../assets/icons8-html-480.png';
import express from '../assets/icons8-express-js-250.png';
import prisma from '../assets/logo-Prisma.png';
import python from '../assets/python.png';
import java from '../assets/java.jpg';
import laravel from '../assets/laravelIcon.png';
import mongoDB from '../assets/mongoDB.png';

const Technologie = () => {
    return (
        <div className={"technologie"}>
            <h2>Technologie</h2>
            <p>Les technologies que j'ai utilisé dans différent projet</p>
            <div className="logos">
                <img src={docker} alt="css" loading={"lazy"}/>
                <img src={css} alt="css" loading={"lazy"}/>
                <img src={html} alt="css" loading={"lazy"}/>
                <img src={express} alt="css" loading={"lazy"}/>
                <img src={prisma} alt="css" loading={"lazy"}/>
                <img src={python} alt="css" loading={"lazy"}/>
                <img src={java} alt="css" loading={"lazy"}/>
                <img src={laravel} alt="css" loading={"lazy"}/>
                <img src={mongoDB} alt="css" loading={"lazy"}/>
            </div>
        </div>
    );
};

export default Technologie;
