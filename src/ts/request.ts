export const serverRequest = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`request error, ${response.status}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    return (error as Error).message;
  }
};
