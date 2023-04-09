import React, { useEffect, useState } from 'react';
import useDataFetch from 'api/useDataFetch';
import CardsList from 'components/cards/CardsList';
import Search from 'components/search/Search';
import Modal from 'components/modal/Modal';
import { dataType } from 'api/datatype';

const Home = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem('search') || '');
  const [modal, setModal] = useState<boolean>();
  const [id, setId] = useState<string>();
  const [filters, setFilter] = useState([]);
  const { data, loading } = useDataFetch(search);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', search as string);
    };
  });
  useEffect(() => {
    setFilter(data.filter((item: dataType) => item._id == id));
  }, [id, data]);

  const handleModalOpen = (id: string) => {
    setId(id);
    setTimeout(() => setModal(true), 100);
  };

  return (
    <div
      data-testid="home"
      className="container mx-auto my-[50px] px-4 flex flex-col relative items-center justify-center"
    >
      {modal && <Modal setModal={setModal} data={filters[0] && filters[0]} />}

      <Search setSearch={setSearch} search={search} />
      {loading ? (
        <h1 className="text-[24px] mt-[100px]">Progressing...</h1>
      ) : (
        <CardsList handleModalOpen={handleModalOpen} data={data} />
      )}
    </div>
  );
};

export default Home;
