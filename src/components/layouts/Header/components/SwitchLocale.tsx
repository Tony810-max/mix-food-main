'use client';

// Radix UI Select components
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { useCommonLocale } from '@/hooks/useCommonLocale';
import type { Locale } from '@/i18n/config';
import { getLocales } from '@/i18n/const';
import { getCookies } from '@/lib/cookie';
import { COOKIE_KEYS } from '@/utils/const';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const SwitchLocale = () => {
  const t = useTranslations('Language');
  const locales = getLocales(t);
  const { isPending, handleChangeLocale } = useCommonLocale();
  const currentLocale = getCookies(COOKIE_KEYS.LOCALE);
  // Fallback to first locale (usually default) if cookie is missing
  const initialLocale = currentLocale || locales[0]?.key;

  const [selectedLocale, setSelectedLocale] = React.useState<string>(initialLocale);
  const selectedLabel = locales.find((l) => l.key === selectedLocale)?.label;

  const renderFlag = (locale: string, size: 'trigger' | 'item' = 'item') => {
    const base = size === 'trigger' ? 'w-8 aspect-video' : 'w-6 aspect-video';
    return (
      <div className={`relative ${base} overflow-hidden rounded-[.25rem]`}>
        <Image src={`/images/country/${locale}.png`} alt={locale} fill unoptimized className='object-cover' />
      </div>
    );
  };

  return (
    <Select
      value={selectedLocale}
      onValueChange={(val) => {
        setSelectedLocale(val);
        handleChangeLocale(val as Locale);
      }}
      disabled={isPending}
    >
      <SelectTrigger
        aria-label={t('language')}
        className='flex w-40 items-center gap-2 border-none bg-transparent p-0 focus:ring-0 data-[placeholder]:text-transparent'
      >
        {renderFlag(selectedLocale, 'trigger')}
        <span className='inline-block w-24 truncate font-medium text-[#99634D] text-sm'>{selectedLabel}</span>
      </SelectTrigger>

      <SelectContent sideOffset={4} className='min-w-[140px] rounded-sm border shadow-lg backdrop-blur-sm'>
        {locales.map((l) => (
          <SelectItem
            key={l.key}
            value={l.key}
            disabled={l.key === selectedLocale && isPending}
            className='text-[#99634D] hover:opacity-80 focus:text-[#99634D]'
          >
            <div className='flex items-center gap-2'>
              {renderFlag(l.key)}
              <span className='inline-block w-24 truncate'>{l.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SwitchLocale;
