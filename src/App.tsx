import React, { useState } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FleetSection } from './components/FleetSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    lake?: string;
    hours?: number;
    experience?: string;
  }>({});

  const handleOpenBooking = (prefill?: {
    lake?: string;
    hours?: number;
    experience?: string;
  }) => {
    if (prefill) {
      setBookingPrefill(prefill);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0221] text-white flex flex-col font-sans relative selection:bg-[#ff00e6] selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onNavigateTab={(tab) => setActiveTab(tab as PageTab)}
            />
            {/* Quick Preview of Experiences */}
            <div className="pt-8">
              <ExperiencesSection onOpenBooking={handleOpenBooking} />
            </div>
            {/* Lake Destinations Guide */}
            <div className="pt-8">
              <DestinationsSection onOpenBooking={handleOpenBooking} />
            </div>
            {/* Transparent Pricing */}
            <div className="pt-8">
              <PricingSection onOpenBooking={handleOpenBooking} />
            </div>
            {/* Community Reviews */}
            <div className="pt-8">
              <ReviewsSection />
            </div>
          </div>
        )}

        {(activeTab === 'services' || activeTab === 'fleet') && (
          <div>
            <FleetSection onOpenBooking={() => handleOpenBooking()} />
            <div className="pt-8">
              <ExperiencesSection onOpenBooking={handleOpenBooking} />
            </div>
            <div className="pt-8">
              <PricingSection onOpenBooking={handleOpenBooking} />
            </div>
          </div>
        )}

        {activeTab === 'experiences' && (
          <ExperiencesSection onOpenBooking={handleOpenBooking} />
        )}

        {activeTab === 'destinations' && (
          <DestinationsSection onOpenBooking={handleOpenBooking} />
        )}

        {activeTab === 'pricing' && (
          <PricingSection onOpenBooking={handleOpenBooking} />
        )}

        {activeTab === 'gallery' && <GallerySection />}

        {activeTab === 'reviews' && <ReviewsSection />}

        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* Floating Action Button for WhatsApp */}
      <WhatsAppFloatingButton />

      {/* Multi-Step Reservation Modal Engine */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefill={bookingPrefill}
      />

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
