import React from 'react';

export interface Memory {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
}

export interface Reason {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}