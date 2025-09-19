export async function load({ url }) {
    const member = await fetch("https://fdnd.directus.app/items/person/236");
    const memberData = await member.json();
 
    return { member: memberData.data };
}