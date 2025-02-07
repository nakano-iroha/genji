import ProfileForm from '@/components/forms/ProfileForm'
import React from 'react'
import ProfilePicture from './_components/ProfilePicture'
import { db } from '@/lib/db'

type Props = {}

const Settings = (props: Props) => {

    const removeProfileImage = async () => {
        'use server'
        const response = await db.user.update({
          where: {
            clerkId: authUser.id,
          },
          data: {
            profileImage: '',
          },
        })
        return response
      }

  return (
    <div className="flex flex-col gap-4">
        <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
            <span>Settings</span>
        </h1>
        <div className="flex flex-col gap-10 p-6">
            <div>
            <h2 className="text-2xl font-bold">User Profile</h2>
            <p className="text-base text-white/50">
                Add or update your information
            </p>
            </div>
        </div>
        <div className=' mx-6'>
            <ProfilePicture
                // onDelete={removeProfileImage}
                // userImage={user?.profileImage || ''}
                // onUpload={uploadProfileImage}
            />
            <ProfileForm  />
        </div>
    </div>
  )
}
// **Continue at 2.13.20
// **Dont forget to run both npm run dev and npx prisma studio

export default Settings