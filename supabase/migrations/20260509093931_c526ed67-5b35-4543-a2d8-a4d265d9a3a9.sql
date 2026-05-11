-- Designer applications
CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  portfolio_url TEXT NOT NULL CHECK (char_length(portfolio_url) BETWEEN 4 AND 500),
  category TEXT NOT NULL CHECK (category IN ('womenswear','menswear','accessories','genderless')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
  ON public.applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No SELECT policy: submissions are only visible via the backend dashboard (service role).

-- Sponsor inquiries
CREATE TABLE public.sponsor_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT NOT NULL CHECK (char_length(company) BETWEEN 1 AND 160),
  contact_name TEXT NOT NULL CHECK (char_length(contact_name) BETWEEN 1 AND 120),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  budget TEXT CHECK (budget IS NULL OR budget IN ('under_25k','25_100k','100_250k','250k_plus')),
  message TEXT CHECK (message IS NULL OR char_length(message) <= 2000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.sponsor_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a sponsor inquiry"
  ON public.sponsor_inquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX idx_applications_created_at ON public.applications (created_at DESC);
CREATE INDEX idx_sponsor_inquiries_created_at ON public.sponsor_inquiries (created_at DESC);