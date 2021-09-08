import React, { useState } from 'react'
import Heroes from '../assets/JSON/heroes.json';
import url from '../assets/JSON/image-urls.json';
import Modal from './Modal';

export default function HeroList() {

  // Play with heroes json to group them
  //const heroes = Heroes.map(hero => hero.name.replace("npc_dota_hero_",""))
  const heroFullImageURL = url.dota_hero_full.base_url;
  const agiHeroes = Heroes.filter(hero => hero.primary_attr === "agi").map(hero => hero.name.replace("npc_dota_hero_",""));
  const intHeroes = Heroes.filter(hero => hero.primary_attr === "int").map(hero => hero.name.replace("npc_dota_hero_",""));
  const strHeroes = Heroes.filter(hero => hero.primary_attr === "str").map(hero => hero.name.replace("npc_dota_hero_",""));

  // State that handles the modal
  const [show, setShow] = useState(false);
  const [hero, setHero] = useState()

  function heroIconPressed(heroName){
    setHero(heroName);
    setShow(true);
  }

  return (
    <>
      <Modal onClose={() => setShow(false)} show={show} hero={hero}></Modal>
      <h4> Agility </h4>
      <div className="content-group">
        {agiHeroes.map(heroName => (
          <>
            <button className="glow-on-hover" onClick={() => heroIconPressed(heroName)}>
              <img className="heroIcon" src={heroFullImageURL+heroName+".png"} alt={heroName} />
            </button>
          </>
        ))}
      </div>
      <h4> Strength </h4>
      <div className="content-group">
        {strHeroes.map(heroName => (
          <>
            <button className="glow-on-hover" >
              <img className="heroIcon" src={heroFullImageURL+heroName+".png"} alt={heroName} />
            </button>
          </>
        ))}
      </div>
      <h4> Intelligence </h4>
      <div className="content-group">
        {intHeroes.map(heroName => (
          <>
            <button className="glow-on-hover" >
              <img className="heroIcon" src={heroFullImageURL+heroName+".png"} alt={heroName} />
            </button>
          </>
        ))}
      </div>
    </>
  
  )
}
