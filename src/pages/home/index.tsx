import React, { useEffect } from 'react';
import './index.scss';
import { Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/index';
import { add, subtract, reset } from '../../store/slices/counter/counter';
import api from 'api';
import useTheme from 'hooks/useTheme';

export interface IHomePageProps {}

export default function HomePage() {
  const { counter } = useSelector((store: RootState) => store.counter);
  const dispatch = useDispatch();

  const getTvPopular = async () => {
    try {
      const response = await api.getPopular({ page: 1 });
      console.log('response', response);
    } catch (error: any) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getTvPopular();
  }, []);

  const onAdd = () => {
    dispatch(add(1));
  };

  const onSubtract = () => {
    dispatch(subtract(1));
  };

  const onReset = () => {
    dispatch(reset());
  };

  const { theme } = useTheme();

  return (
    <div className="home-page">
      <p className="home-page__title" style={{ color: theme.text }}>
        HomePage
      </p>
      <div className="home-page__content">
        <Button type="primary" onClick={onAdd}>
          +
        </Button>
        <span className="value">{counter}</span>
        <Button type="primary" onClick={onSubtract}>
          -
        </Button>
        <Button type="primary" onClick={onReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
