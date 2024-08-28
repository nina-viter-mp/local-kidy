'use server';

import prisma from '@/lib/db';
import { redirect } from 'next/navigation';

export async function addUser(formData: FormData) {
  console.log(formData);
  await prisma.user.create({
    data: {
      last_name: formData.get('last_name') as string,
      first_name: formData.get('first_name') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      email: formData.get('email') as string,
      number_of_children: formData.get('number_of_children') as string,
      age_of_children: formData.get('age_of_children') as string,
      start_date_of_care: new Date(formData.get('start_date_of_care') as string),
      frequency: formData.get('frequency') as string,
      total_hours: formData.get('total_hours') as string,
    },
  });

  redirect('/users');
}
