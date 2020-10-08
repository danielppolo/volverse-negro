import React, { useEffect, useState, useMemo } from 'react'
import Figure from '../components/figure'

const useFigures = () => {
  const [figures, setFigures] = useState([])
  const getFigures = () => figures
  const sources = useMemo(() => [
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112122/volverse_negro/figuras/1_q1yyfg.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112122/volverse_negro/figuras/2_dsukrj.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112123/volverse_negro/figuras/3_yqbsmj.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112123/volverse_negro/figuras/4_yrfqjl.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/5_kci6nb.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/6_v444af.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/7_mld4ii.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/8_tk9hmv.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/9_sbtlz0.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/10_dpsofl.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/11_gu9wf3.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/12_d6ee5p.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112118/volverse_negro/figuras/13_frsxc6.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112120/volverse_negro/figuras/22_li3laq.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112120/volverse_negro/figuras/23_hoyrjh.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112120/volverse_negro/figuras/24_zttlzv.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112120/volverse_negro/figuras/25_qdihij.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112120/volverse_negro/figuras/26_le1hgm.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112121/volverse_negro/figuras/27_vx14vy.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112121/volverse_negro/figuras/29_tnfzoh.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112121/volverse_negro/figuras/30_gwwnkq.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112121/volverse_negro/figuras/31_trdgar.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112121/volverse_negro/figuras/32_r5ypjz.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112121/volverse_negro/figuras/33_tggu4y.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112122/volverse_negro/figuras/35_hrrdvc.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112122/volverse_negro/figuras/38_j6igxm.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602112122/volverse_negro/figuras/39_ezqabz.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602119774/volverse_negro/figuras/40_xiuyoz.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602119774/volverse_negro/figuras/41_ykp3t2.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602119774/volverse_negro/figuras/43_e51erz.jpg',
    'https://res.cloudinary.com/teatroojo/image/upload/v1602119774/volverse_negro/figuras/42_hijdr7.jpg',
  ], [])

  useEffect(() => {
    document.addEventListener('click', () => {
      setFigures([...getFigures(), <Figure src={sources[Math.floor(Math.random() * sources.length)]} key={Math.random()} />])
    })
  }, [])
  return figures
}

export default useFigures
