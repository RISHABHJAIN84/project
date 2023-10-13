import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({
            user,account, profile
        }) {
            if (account?.provider == "google") {
                console.log({user,account,profile})
                return true;
            }
        }
    }
}