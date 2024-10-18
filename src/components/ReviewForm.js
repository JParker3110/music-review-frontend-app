const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: songTitle,
        content: review,
        rating,
        song_link: songLink,
        likes: 0,
      }),
    });

    if (!response.ok) {
      throw new Error('Error adding review');
    }

    const data = await response.json();
    console.log('Review added:', data);
    router.push('/reviews'); // Redirect after successful submission
  } catch (error) {
    console.error('Error adding review:', error);
  }
};
