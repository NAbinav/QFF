import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./Dialogue";

const DayThree = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <a className="more text-base translate-y-6">View Day 3 Schedule</a>
      </DialogTrigger>
      <DialogContent className="dialogue text-base max-w-2xl max-h-[80vh] overflow-y-auto p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center pb-4" style={{borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
            <h2 className="text-2xl font-bold mb-1">DAY 3</h2>
            {/* <p className="opacity-70">Fall Fest 2025 - Final Day</p> */}
          </div>

          {/* Breakfast Session */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.02)', 
            borderLeft: '4px solid white'
          }}>
            <div className="flex items-center space-x-4">
              <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center"
                   style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
                8:00 - 9:00 AM
              </div>
              <div className="flex-1">
                <p className="font-medium mb-1">Breakfast Session</p>
                <p className="text-sm opacity-80">Morning refreshments & final preparations</p>
              </div>
            </div>
          </div>

          {/* Closing Ceremony */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.03)', 
            borderLeft: '4px solid white'
          }}>
            <h3 className="font-semibold text-lg mb-4">Closing Ceremony</h3>
            <div className="flex items-start space-x-4">
              <div className="text-xs px-3 py-2 rounded font-medium min-w-[110px] text-center"
                   style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                9:00 - 10:00 AM
              </div>
              <div className="flex-1">
                <p className="font-medium mb-2">Felicitation & Conclusion</p>
                <div className="space-y-1 text-sm opacity-80">
                  <p>• Prize Distribution Ceremony</p>
                  <p>• Recognition of outstanding participants</p>
                  <p>• Chief Guest Address (Dignitary)</p>
                  <p>• Fall Fest 2025 Official Conclusion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Information */}
          <div className="p-4 rounded-lg" style={{backgroundColor: 'rgba(0,0,0,0.02)'}}>
            <h4 className="font-medium mb-2">📍 Venue Information</h4>
            <p className="opacity-80">AB1 - Netaji Auditorium</p>
          </div>

          {/* Marketing & Promotion */}
          <div className="p-5 rounded-lg" style={{
            backgroundColor: 'rgba(0,0,0,0.03)', 
            borderLeft: '4px solid white'
          }}>
            <h3 className="font-semibold text-lg mb-4">🎯 Event Marketing</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium mb-1">Campus Promotion Week</p>
                <p className="text-sm opacity-80 mb-2">1 week before Fall Fest 2025</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'rgba(0,0,0,0.06)'}}>
                    QC Application Stalls
                  </span>
                  <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'rgba(0,0,0,0.06)'}}>
                    Domain Showcases
                  </span>
                  <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'rgba(0,0,0,0.06)'}}>
                    Campus Wide Setup
                  </span>
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-1">Fall Fest 2025 Mascot</p>
                <p className="text-sm opacity-80">Official event mascot introduction and branding</p>
              </div>
            </div>
          </div>

          {/* Event Summary */}
          <div className="p-4 rounded-lg" style={{backgroundColor: 'rgba(0,0,0,0.02)'}}>
            <h4 className="font-medium mb-2">🏆 Event Highlights</h4>
            <div className="text-sm opacity-80 space-y-1">
              <p>• 3-day comprehensive quantum computing festival</p>
              <p>• Interactive workshops, lectures, and hands-on challenges</p>
              <p>• Overnight hackathon with multiple tracks</p>
              <p>• Industry experts and academic dignitaries</p>
              <p>• Recognition and prizes for outstanding performance</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DayThree;