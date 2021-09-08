import React from 'react'
import Heroes from '../assets/JSON/heroes.json';

export default function HeroList() {

    const heroes = Heroes.map(hero => hero.name.replace("npc_dota_hero_",""))
    const agiHeroes = Heroes.filter(hero => hero.primary_attr === "agi").map(hero => hero.name.replace("npc_dota_hero_",""));
    const intHeroes = Heroes.filter(hero => hero.primary_attr === "int").map(hero => hero.name.replace("npc_dota_hero_",""));
    const strHeroes = Heroes.filter(hero => hero.primary_attr === "str").map(hero => hero.name.replace("npc_dota_hero_",""));

     // <img src={"src/assets/img/full"+heroName+"_full.png"} alt={heroName} />
     // {agiHeroes[2].primary_attr}
    return (
      <>
        <h4> Agility </h4>
        <div className="content-group">
          {agiHeroes.map(heroName => (
            <>
              <button className="glow-on-hover" >
                <img className="heroIcon" src={"http://cdn.dota2.com/apps/dota2/images/heroes/"+heroName+"_lg.png"} alt={heroName} />
              </button>
            </>
          ))}
        </div>
        <h4> Strength </h4>
        <div className="content-group">
          {strHeroes.map(heroName => (
            <>
              <button className="glow-on-hover" >
                <img className="heroIcon" src={"http://cdn.dota2.com/apps/dota2/images/heroes/"+heroName+"_lg.png"} alt={heroName} />
              </button>
            </>
          ))}
        </div>
        <h4> Intelligence </h4>
        <div className="content-group">
          {intHeroes.map(heroName => (
            <>
              <button className="glow-on-hover" >
                <img className="heroIcon" src={"http://cdn.dota2.com/apps/dota2/images/heroes/"+heroName+"_lg.png"} alt={heroName} />
              </button>
            </>
          ))}
        </div>
      </>
    
    )
  }
