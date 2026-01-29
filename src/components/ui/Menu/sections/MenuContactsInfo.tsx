import React from 'react';

interface ContactInfo {
  phone: string;
  email: string;
  workingHours: {
    days: string;
    time: string;
  };
}

interface MenuContactsInfoProps {
  contactInfo?: ContactInfo;
}

export const MenuContactsInfo: React.FC<MenuContactsInfoProps> = ({
  contactInfo = {
    phone: '8-800-250-28-42',
    email: 'info@bbship.ru',
    workingHours: {
      days: 'Будние дни',
      time: '10:00 – 18:00',
    },
  }
}) => {
  return (
    <div className="space-y-6 text-end">
      <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
      
      <div className="space-y-5">
        {/* Часы работы - отдельный блок с отступами */}
        <div className="space-y-1">
          <div className="flex items-center justify-end gap-2 text-white mb-1">
            <span className="text-xl">🕐</span>
            <span className="font-medium">Часы работы</span>
          </div>
          <div className="pl-8 space-y-0">
            <p className="text-gray-300 text-sm">{contactInfo.workingHours.days}</p>
            <p className="text-gray-300 text-sm font-medium">{contactInfo.workingHours.time}</p>
          </div>
        </div>
        
        {/* Разделитель */}

        {/* Телефон - компактно */}
        <div className="flex items-center justify-end gap-2">
          <span className="text-xl">📞</span>
          <p className="text-white font-medium">{contactInfo.phone}</p>
        </div>

        {/* Email - компактно */}
        <div className="flex items-center justify-end gap-2">
          <span className="text-xl">✉️</span>
          <p className="text-white font-medium">{contactInfo.email}</p>
        </div>
      </div>
    </div>
  );
};
