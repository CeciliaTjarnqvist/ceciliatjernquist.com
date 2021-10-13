import React from "react"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { Cv } from "./cv/cv"
import { CoverLetter } from "./coverLetter/coverLetter"
import { Hero } from "./hero/hero"
import "./app.pcss"

export const App = () =>
{
    return (
        <div>
            <Header />
            <Hero />
            <CoverLetter />
            <Cv />
            <Footer />
        </div>
    );
};
