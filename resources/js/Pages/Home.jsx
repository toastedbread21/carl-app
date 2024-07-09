import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import "../../css/home.css"; // Ensure to import your custom styles file where you define animations
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggle visibility state
    };

    return (
        <Layout>
            <div>
                <div className="text-center p-24">
                    <Link
                        className="text-6xl font-bold mb-10  cursor-pointer "
                        to="3d-service"
                        smooth={true}
                        duration={300}
                        onClick={toggleVisibility}
                    >
                        Get Started.
                    </Link>
                </div>
                <div
                    className={`fade-in ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="container mx-auto Services-section p-10">
                        <div
                            className="3d-service flex items-center space-x-4 pt-20 pb-20"
                            id="3d-service"
                        >
                            <div className="paragraph max-w-lg">
                                <h2 className="text-3xl font-bold mb-4">
                                    Bringing Imagination to Life with 3D
                                    Modeling
                                </h2>
                                <p className="mb-2">
                                    From conceptualization to creation,
                                </p>
                                <p>
                                    I transform ideas into stunning 3D models
                                    that captivate audiences.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <img
                                    src="/images/3d.jpg"
                                    alt="3D Model"
                                    className="w-auto h-98 object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="dillustrate-service flex items-center space-x-4 pt-20 pb-20">
                            <div className="flex-shrink-0">
                                <img
                                    src="/images/digital.jpg"
                                    alt="Digital Art"
                                    className="w-auto h-98 object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="paragraph max-w-lg">
                                <h2 className="text-3xl font-bold mb-4">
                                    Crafting Digital Art That Captivates
                                </h2>
                                <p className="mb-2">
                                    My digital art pieces evoke emotion and
                                    inspire, blending creativity with technical
                                    precision.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[60px] p-24">
                        Passion for Creating Art That Inspires.
                    </p>
                    <div className="video-service flex items-center space-x-4 p-20 bg-zinc-900 w-full">
                        <div className="paragraph max-w-lg">
                            <h2 className="text-2xl font-bold mb-4">
                                Transforming Moments through Video Editing
                            </h2>
                            <p className="mb-2">
                                With expertise in video editing, I turn raw
                                footage into compelling stories that resonate
                                with viewers.
                            </p>
                            <h2 className="text-2xl font-bold mb-4">
                                Enhancing Images with Precision Photo Editing
                            </h2>
                            <p className="mb-2">
                                Using advanced photo editing techniques, I
                                enhance images to perfection, creating memorable
                                visuals.
                            </p>
                            <h2 className="text-2xl font-bold mb-4">
                                Building Digital Destinations with Website
                                Creation
                            </h2>
                            <p className="mb-2">
                                I design and develop interactive websites that
                                engage users and showcase your brand
                                effectively.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <video
                                className="inset-0 w-auto h-99 object-cover rounded-lg shadow-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source
                                    src="/images/video.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="container mx-auto text-center p-24">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to get started?
                        </h2>
                        <p className="pb-10">
                            Explore our services and let's create something
                            amazing together.
                        </p>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-10 p-10">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
