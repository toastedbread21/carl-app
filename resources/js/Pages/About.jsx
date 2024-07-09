import React from "react";
import Layout from "../Layouts/Layout";

const About = () => {
    return (
        <Layout>
            <div>
                <div className="flex p-14 items-center">
                    <img
                        src="/images/me.png"
                        alt="My Image"
                        className="w-auto h-64 rounded-full shadow-md"
                    />
                    <div className="text-base leading-normal mb-4 p-12">
                        <p className="p-5">
                            I'm <strong>Carl</strong>, specializing in web
                            development, photo editing, video editing, 3D
                            modeling, and digital illustration. With expertise
                            in PHP, Laravel, JavaScript, Adobe Photoshop,
                            Premiere Pro, After Effects, and 3D art tools, I
                            create tailored solutions for websites, visual
                            content, and digital art projects. I offer services
                            in responsive web development, professional photo
                            and video editing, detailed 3D modeling and
                            animation, and captivating digital illustration.
                        </p>
                        <p className="p-5">
                            My technical and creative skills enable me to
                            approach challenges innovatively. Eager for new
                            projects pushing boundaries of technology and
                            creativity.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
