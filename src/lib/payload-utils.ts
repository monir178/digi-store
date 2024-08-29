import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
    cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
    const token = cookies.get('payload-token')?.value;

    if (!token) {
        return { user: null }; // Handle the case where there's no token
    }

    try {
        const meRes = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
            {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            }
        );

        if (!meRes.ok) {
            console.error(`Failed to fetch user: ${meRes.statusText}`);
            return { user: null };
        }

        const { user } = (await meRes.json()) as { user: User | null };
        return { user };
    } catch (error) {
        console.error('An error occurred while fetching the user:', error);
        return { user: null }; // Return null user if there's an error
    }
};
