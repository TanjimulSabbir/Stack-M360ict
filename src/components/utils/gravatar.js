import gravatarUrl from 'gravatar-url';

export default function gravatar({ email }) {
    return gravatarUrl(email, { size: 80 })

}
