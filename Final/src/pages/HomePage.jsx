import React from 'react'
import Hero from '../components/HomePage/Hero/Hero'
import Banner from "../components/HomePage/Banner/Banner"
import Category from "../components/HomePage/Category/Category";
import Category2 from "../components/HomePage/Category/Category2";
import Services from "../components/HomePage/Services/Services";
import headphone from "../assets/hero/headphone.png"
import smartwatch2 from "../assets/category/smartwatch2-removebg-preview.png"
import Products from "../components/HomePage/Products/Products";
import Blogs from "../components/HomePage/Blogs/Blogs";


const BannerData1 = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#f42c37",
};
const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hours",
    date: "14 Jan to 28 Jan",
    image: smartwatch2,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#2dcc6f",
};


const HomePage = () => {
    return (
        <div>
            <Hero />
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData1} />
            <Products />
            <Banner data={BannerData2} />
            <Blogs />
        </div>
    )
}

export default HomePage
