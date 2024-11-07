import fs from 'fs';
import axios from 'axios';

export const models = (req, res) => {
  res.json({ data: [{id: "gpt-4o"}] });
}

export const chat = (req, res) => {
  res.json({ data: [{id: "gpt-4o", message: "hello world !!!"}] });
}