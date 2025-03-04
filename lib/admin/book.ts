"use server"

import { db } from "@/database/drizzle"
import { books } from "@/database/schema"

interface BookParams {
    title : string,
    author : string,
    genre : string,
    rating : number,
    totalCopies : number,
    description : string,
    coverColor : string,
    coverUrl : string,
    videoUrl : string,
    summary : string
}

export const createBook = async (params: BookParams) => {
    try {
      const newBook = await db
        .insert(books)
        .values({
          ...params,
          availableCopies: params.totalCopies,
        })
        .returning();
  
      return {
        success: true,
        data: JSON.parse(JSON.stringify(newBook[0])),
      };
    } catch (error) {
      console.log(error);
  
      return {
        success: false,
        message: "An error occurred while creating the book",
      };
    }
  };

