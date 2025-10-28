"use client"
// 📦React
import { useEffect, useState } from "react"

// 🧩 Components
import { Button } from "@/components/ui/Button/Button"

// 🎨 Styles
import styles from "./banner.module.css"


export function Banner() {
 const [ timeLeft , setTimerLeft] = useState({
    days:"00",
    hours:"00",
    minutes:"00",
    seconds:"00"
 })

 useEffect(()=> {
    const dataTimer = new Date("2026-01-07T23:59:59").getTime()

    const timer = setInterval(()=> {
        const now = new Date().getTime()
        const distance = dataTimer - now


        if (distance <= 0) {
            clearInterval(timer)
            setTimerLeft({days:"00" , hours:"00" , minutes:"00" , seconds:"00"})
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        setTimerLeft({ 
            days: String(days).padStart(2, "0"),
            hours:String(hours).padStart(2, "0"),
            minutes:String(minutes).padStart(2, "0"),
            seconds:String(seconds).padStart(2, "0"),


        });
    }, 1000);

     return () => clearInterval(timer);
 }, [])



    return (
        <>
            <section className={styles.container__banner}>
                <div
                    className={styles.content}>

                    <div className={styles.banner__one}>
                        <div className={styles.border__banner}>
                            <div className={styles.content__banner__one}>
                                <label>Hot deal furniture</label>
                                <h1>
                                    Furniture limit<br />
                                    Offer <br />
                                    30% Off
                                </h1>
                                <Button variant="white" icon={true} heigthStyles="h-lg" widthStyles="w-fit">
                                    By Now
                                </Button>
                            </div>


                        </div>
                    </div>

                    <div className={styles.banner__two}>

                        <div className={styles.border__banner}>
                            <div className={styles.content__banner__two}>
                                <label>Hot deal furniture</label>
                                <h1>Deals OF the Week</h1>
                                <div className={styles.deals__off}>
                                    <div className={styles.day__timer}>
                                        <span>{timeLeft.days}</span>
                                        <hr />
                                        <label>Days</label>
                                    </div>
                                    <div className={styles.day__timer}>
                                        <span>{timeLeft.hours}</span>
                                        <hr />
                                        <label>Hours</label>
                                    </div>
                                    <div className={styles.day__timer}>
                                        <span>{timeLeft.minutes}</span>
                                        <hr />
                                        <label>Minutes</label>
                                    </div>
                                    <div className={styles.day__timer}>
                                        <span>{timeLeft.seconds}</span>
                                        <hr />
                                        <label>Seconds</label>
                                    </div>
                                </div>

                                <Button variant="white" icon={true} heigthStyles="h-lg" widthStyles="w-fit">
                                    By now
                                </Button>
                            </div>


                        </div>

                    </div>


                </div>

            </section>


        </>
    )
}