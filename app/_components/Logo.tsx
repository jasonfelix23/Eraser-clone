"use client";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const Logo = ({minimal= true, height=120, width=120}: any) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  console.log(minimal, theme);
  return (
    <div>  
        {minimal===false && theme === 'dark' && (
            <Image src="/dark_bg_logo.png" alt="logo" height={height} width={width} />
        )} 
        {minimal===false && theme !== 'dark' && (
            <Image src="/white_bg_logo.png" alt="logo" height={height} width={width} />
        )}
        {minimal===true && (
            <Image src="/logo_icon_no_bg.png" alt="logo" height={height} width={width} />
        )}
    </div>
  );
};

export default Logo;
