import { Ticket, User } from "../interfaces";

export const groupTicketsByStatus = (tickets: Ticket[]) => {
    const groups: Record<string, Ticket[]> = tickets.reduce((result: Record<string, Ticket[]>, ticket: Ticket) => {
        if (!result[ticket.status]) {
            result[ticket.status] = [];
        }
        result[ticket.status].push(ticket);
        return result;
    }, { "Backlog": [], "Todo": [], "In progress": [], "Done": [], "Canceled": [], });

    return groups;
};

export const groupTicketsByPriority = (tickets: Ticket[]) => {
    const groups: Record<string, Ticket[]> = tickets.reduce((result: Record<string, Ticket[]>, ticket: Ticket) => {
        const priority = getPriotityLabel(ticket.priority);
        if (!result[priority]) {
            result[priority] = [];
        }
        result[priority].push(ticket);
        return result;
    }, { "No priority": [], "Low": [], "Medium": [], "High": [], "Urgent": [] });

    return groups;
};

export const groupTicketsByUserId = (tickets: Ticket[]) => {
    const groups: Record<string, Ticket[]> = tickets.reduce((result: Record<string, Ticket[]>, ticket: Ticket) => {
        if (!result[ticket.userId]) {
            result[ticket.userId] = [];
        }
        result[ticket.userId].push(ticket);
        return result;
    }, {});

    return groups;
};

export const mapUsersByUserId = (users: User[]) => {
    let group: Record<string, User> = users.reduce((accumulator: Record<string, User>, user: User) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});

    return group;
};

const getPriotityLabel = (priority: number) => {
    switch (priority) {
        case 0: return "No priority";
        case 1: return "Low";
        case 2: return "Medium";
        case 3: return "High";
        case 4: return "Urgent";
        default: return "NA";
    }
}

const orderByPriority = (tickets: Ticket[]) => tickets.sort((a: Ticket, b: Ticket) => a.priority > b.priority ? -1 : 1);
const orderByTitle = (tickets: Ticket[]) => tickets.sort((a: Ticket, b: Ticket) => a.title < b.title ? -1 : 1);

export const loadGrid = (tickets: Ticket[], grouping: string, ordering: string) => {
    let orderedTickets;
    if (ordering === "priority")
        orderedTickets = orderByPriority(tickets);
    else
        orderedTickets = orderByTitle(tickets);

    switch (grouping) {
        case "status": return groupTicketsByStatus(orderedTickets);
        case "priority": return groupTicketsByPriority(orderedTickets);
        case "user": return groupTicketsByUserId(orderedTickets);
        default: return groupTicketsByUserId(orderedTickets);
    }
}