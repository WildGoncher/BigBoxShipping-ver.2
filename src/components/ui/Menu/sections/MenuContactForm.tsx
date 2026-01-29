import React, { useState } from 'react';
import { Input } from '../../Input/Input';
import { Select } from '../../Select';
import { Button } from '../../Button/Button';

export const MenuContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные формы:', { name, email, subject, message });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const topicOptions = [
    { value: 'delivery', label: 'Заказать доставку груза' },
    { value: 'cost', label: 'Рассчитать стоимость доставки' },
    { value: 'buy', label: 'Купить контейнер' },
    { value: 'inquiry', label: 'Иное' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white text-center">Связаться с нами</h3>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          label="Ваше имя"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="primary"
          size="sm"
        />
        
        <Input
          label="Email"
          placeholder="email@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="primary"
          size="sm"
        />
        
        <Select
          label="Тема обращения"
          placeholder="Выберите тему"
          options={topicOptions}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          variant="primary"
          size="sm"
        />

        <div className="pt-1">
          <label className="block text-white text-sm mb-1">
            Сообщение
          </label>
          <textarea
            className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm 
              border border-white/20 text-white 
              placeholder:text-gray-400 focus:outline-none 
              text-sm min-h-[80px] resize-none"
            placeholder="Ваш вопрос или сообщение..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        
        {/* РЕШЕНИЕ: обертка с flex justify-end */}
        <div className="flex justify-end mt-2">
          <Button 
            type="submit" 
            variant="dot" 
            size="sm"
          >
            Отправить
          </Button>
        </div>
      </form>
    </div>
  );
};
