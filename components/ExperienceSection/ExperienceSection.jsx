import React from 'react'

export default function ExperienceSection() {
    return (
        <section className="w-full bg-[#4ECEB3] text-green-900 font-bold text-[60px]  relative font-garamond" style={{ fontSize: '54px' }}>
            <div
                className="absolute inset-0 bg-[#4ECEB3] opacity-0"
                style={{
                    background: `linear-gradient(to bottom,
                rgba(78, 206, 179, 1) 0%,
                rgba(238, 236, 227, 0.2) 40%,
                rgba(238, 236, 227, 0.4) 60%,
                rgba(238, 236, 227, 0.6) 70%,
                rgba(238, 236, 227, 0.8) 85%,
                rgba(238, 236, 227, 1) 100%)`
                }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 h-60"
                style={{
                    background: `linear-gradient(to bottom,
                rgba(78, 206, 179, 0) 0%,
                rgba(238, 236, 227, 0.2) 40%,
                rgba(238, 236, 227, 0.4) 60%,
                rgba(238, 236, 227, 0.6) 70%,
                rgba(238, 236, 227, 0.8) 85%,
                rgba(238, 236, 227, 1) 100%)`
                }}
            />

        </section>
    )
}
