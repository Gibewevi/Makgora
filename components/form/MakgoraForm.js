import React, { Component } from 'react';
import { useState } from 'react';
import Button from './button';
import TextInput from './input';
import ComboBox from './combobox';
import TextArea from './textarea';
import Checkbox from './checkbox';
import { Link } from 'react-router-dom';

export default function MakgoraForm() {

  const newChallenge = {
    challengerName: '',
    challengerRace: '',
    challengerClass: '',
    challengerLevel: 10,
    opponentName: '',
    opponentClass: '',
    opponentLevel: 10,
    challengersFaction: '',
    date: '',
    locationLink: '',
    realmName: '',
    victory: '',
    rule: '',
    comment: '',
    understands: true,
  };

  const [challenge, setChallenge] = useState(newChallenge);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleButtonClick = () => {
    console.log("Mak'gora has been created!");
  };

  return (
    <form className="makgoraForm" action="makgoraForm" onSubmit={handleSubmit}>
      {/* Opponent Informations Section */}
      <div className="makgoraForm__section">
        {/* Your Character */}
        <div className="makgoraForm__column">
          <fieldset>
            <legend>Your Character</legend>
            <TextInput id="challengerName" label="Your Character's Name" placeholder="Your character's name" type="text" maxLength={12} allowSpecialCharacters={false} mandatory={true} />
            <ComboBox id="challengerClass" label="Your Character's Class" placeholder="Select" options={["Druid", "Hunter", "Mage", "Paladin", "Priest", "Shaman", "Warlock", "Warrior"]} mandatory={true} />
            <ComboBox id="challengerLevel" label="Your Character's Level" placeholder="Select" options={[...Array.from({ length: 51 }, (_, i) => (i + 10).toString())]} mandatory={true} />
          </fieldset>
        </div>
        <span className="makgoraForm__vs">VS</span>
        {/* Your Opponent's */}
        <div className="makgoraForm__column">
          <fieldset>
            <legend>Your Opponent</legend>
            <TextInput id="opponentName" label="Opponent's Name" placeholder="Opponent's character name" type="text" maxLength={12} allowSpecialCharacters={false} mandatory={true} />
            <ComboBox id="opponentClass" label="Opponent's Class" placeholder="Select" options={["Druid", "Hunter", "Mage", "Paladin", "Priest", "Shaman", "Warlock", "Warrior"]} mandatory={true} />
            <ComboBox id="opponentLevel" label="Opponent's Level" placeholder="Select" options={[...Array.from({ length: 51 }, (_, i) => i + 10).map((level) => level.toString())]} mandatory={true} />
          </fieldset>
        </div>
      </div>
      {/* Mak'gora Informations Section */}
      <div className="makgoraForm__section">
        <fieldset>
          <legend>Mak'gora Informations</legend>
          <ComboBox id="challengersFaction" label="Faction" placeholder="Select" options={["Horde", "Alliance"]} mandatory={true} />
          <TextInput id="date" label="Duel Date" placeholder="Enter duel date" type="text" mandatory={true} />
          <TextInput id="locationLink" label="Location" placeholder="https://www.../maps?data=" type="text" mandatory={true} />
          <p>Please, use <a href="https://www.wowhead.com/maps" target="_blank" rel="noopener noreferrer">https://www.wowhead.com/maps</a></p>
          <ComboBox id="realmName" label="Realm" placeholder="Select" options={["Defias Pillager (US)", "Skull Rock (US)", "Nek'Rosh (EU)", "Stitches (EU)", "Hogger (TW)", "Teremus (KR)", "Voidwalker (KR)", "Goretusk (KR)"]} mandatory={true} />
          <ComboBox id="victory" label="Victory Condition" placeholder="Select" options={["Death", "Forfeit"]} mandatory={true} />
          <ComboBox id="rule" label="Rule" placeholder="Select" options={["No Buffs", "Buff Allowed"]} mandatory={true} />
          <TextArea id="comment" label="Any last words for your opponent? (Optional)" placeholder="Say your goodbyes!" rows={4} maxLength={40} />
          <Checkbox id="understands" label="Understands" checked={challenge.understands} onChange={(isChecked) => this.setState({ understands: isChecked })} mandatory={true} />
          <p>Once the duel is over, you will have 1 hour to declare the winner. If you don't, you will be automatically marked as the loser.</p>
        </fieldset>
      </div>
      {/* Form Action Buttons */}
      <div className="makgoraForm__buttons">
        <Link className="button button--secondary button--link" to="/">Cancel</Link>
        <Button className="button--primary" onClick={handleButtonClick}>Create Mak'gora</Button>
      </div>
    </form>
  )
};

