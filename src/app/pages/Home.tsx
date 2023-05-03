import React from 'react';
import { Hero } from "../components/Hero";
import { AstronautSection } from '../components/AstronautSection';
import { ConversionSection } from '../components/ConvertionSection';
import { HighlightedContent } from '../components/HighligthedContent';


export const Home = () => (
    <main>
        <Hero />
        <AstronautSection />
        <HighlightedContent />
        <ConversionSection />
    </main>
)