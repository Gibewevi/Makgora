import React, { useState } from 'react';
import TextInput from '../form/input';
import usaFlag from '/public/assets/images/usaFlag.png';
import europeFlag from '/public/assets/images/europeFlag.png';
import taiwanFlag from '/public/assets/images/taiwanFlag.png';
import koreaFlag from '/public/assets/images/koreaFlag.png';
import horde from '/public/assets/images/horde.png';
import alliance from '/public/assets/images/alliance.png';
import { data } from '../../data';

const imageMap = {
  usaFlag,
  europeFlag,
  taiwanFlag,
  koreaFlag,
  horde,
  alliance,
};

const TableColumnHeader = ({ width, children }) => {
  return <th style={{ width }}>{children}</th>;
};

const Table = () => {
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [search, setSearch] = useState('');

  return (
    <section className="makgoraTable">
      <div className="makgoraTable__search">
        <TextInput onChange={(newValue) => setSearch(newValue)} id="searchInput" label="Search" placeholder="Player Name, Realm, Class or ID" type="text" />
      </div>

      <table className="makgoraTable__table">
        <thead>
          <tr>
            <TableColumnHeader width="40px">ID</TableColumnHeader>
            <TableColumnHeader width="230px">Date</TableColumnHeader>
            <TableColumnHeader width="90px">Location</TableColumnHeader>
            <TableColumnHeader width="120px">Realm</TableColumnHeader>
            <TableColumnHeader width="230px">Challenger vs Opponent</TableColumnHeader>
            <TableColumnHeader width="60px">Victory</TableColumnHeader>
            <TableColumnHeader width="95px">Rule</TableColumnHeader>
            <TableColumnHeader width="285px">Challenger Comment</TableColumnHeader>
          </tr>
        </thead>
        <tbody>
          {currentPageData.filter((item) => {
            const lowerSearch = search.toLowerCase();
            return (
              lowerSearch === '' ||
              item.id.toString().includes(lowerSearch) ||
              item.realmName.toLowerCase().includes(lowerSearch) ||
              item.challengerName.toLowerCase().includes(lowerSearch) ||
              item.opponentName.toLowerCase().includes(lowerSearch) ||
              item.challengerClass.toLowerCase().includes(lowerSearch) ||
              item.opponentClass.toLowerCase().includes(lowerSearch)
            );
          }).map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className="makgoraTable__pagination">
        <ul>
          <li>Page:</li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <a
                className={currentPage === index + 1 ? "active" : ""}
                href="#"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const TableRow = ({ item }) => {
  return (
    <tr className="makgoraTable__row" key={item.id}>
      <td>{item.id}</td>
      <td>{item.date}</td>
      <td>
        <a href={item.locationLink} target="_blank" rel="">
          Click to see
        </a>
      </td>
      <td>
        <span>
          <img src={imageMap[item.realmFlagSrc]} alt={item.imageAlt} />
        </span>
        <span>{item.realmName}</span>
      </td>
      <td>
        <span>
          <img src={imageMap[item.challengersFaction]} alt={item.imageAlt} />
        </span>
        <span className={item.challengerClass}>{item.challengerName}</span>
        <span> vs </span>
        <span className={item.opponentClass}>{item.opponentName}</span>
      </td>
      <td>{item.victory}</td>
      <td>{item.rule}</td>
      <td>
        <span className="comment">{item.comment}</span>
      </td>
    </tr>
  );
};

export default Table;