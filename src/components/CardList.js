import React from 'react';
import { Card } from './Card';

export const CardList = ({ robots }) => {
  return robots.map(
    user => <Card key={user.id} robot={user} />
  );
}